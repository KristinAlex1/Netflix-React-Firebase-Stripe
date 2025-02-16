import React, { useEffect, useState } from "react";
import db from "../src/firebase";
import { addDoc, collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlice";
import { loadStripe } from "@stripe/stripe-js"

const PlanScreen = () => {
  const [products, setProducts] = useState({});
  const user = useSelector(selectUser)
  const [subscription,setSubscription] = useState(null)
  
    
    useEffect(() => {
        const fetchSubscription = async () => {
          if (!user?.uid) return;
    
          try {
            const subscriptionRef = collection(db, `customers/${user.uid}/subscription`);
            const querySnapshot = await getDocs(subscriptionRef);
    
            querySnapshot.forEach((doc) => {
              const data = doc.data();
              setSubscription({
                role: data.role,
                current_period_end: data.current_period_end.seconds,
                current_period_start: data.current_period_start.seconds,
              });
            });
          } catch (error) {
            console.error("Error fetching subscription:", error);
          }
        };
    
        fetchSubscription();
      }, [user?.uid]);

    console.log(subscription)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Get a reference to the "products" collection where "active" is true
        const productsRef = collection(db, "products");
        const activeProductsQuery = query(productsRef, where("active", "==", true));
        const querySnapshot = await getDocs(activeProductsQuery);

        const products = {};
        for (const productDoc of querySnapshot.docs) {
          products[productDoc.id] = productDoc.data();

          // Fetch "prices" subcollection for each product
          const pricesRef = collection(productDoc.ref, "prices");
          const priceSnap = await getDocs(pricesRef);

          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
                priceId: price.id,
                priceData: price.data(),
            };
          });
        }

        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const loadCheckout = async (priceId) => {
    try {
        // Reference to the customer's checkout_sessions collection
        const checkoutSessionsRef = collection(
          doc(collection(db, "customers"), user.uid), // Path to customer's document
          "checkout_sessions"
        );
    
        // Add a new checkout session
        const docRef = await addDoc(checkoutSessionsRef, {
          price: priceId,
          success_url: window.location.origin,
          cancel_url: window.location.origin,
        });
    
        // Listen for updates to the session
        onSnapshot(docRef, async (snap) => {
          const { error, sessionId } = snap.data();
    
          if (error) {
            alert(`An error occurred: ${error.message}`);
          }
    
          if (sessionId) {
            const stripe = await loadStripe(
              "pk_test_51QsWdS2f8obfJNGup2UQifSL5d0fLiOEW5J9Rq4dlBN6JWnH7BRQOoFVQLHN6omNbmhL50kR0BJA1Qqv4iU5aRdX00A5yyiPxR"
            );
            stripe.redirectToCheckout({ sessionId });
          }
        });
      } catch (error) {
        console.error("Error in loadCheckout:", error);
      }
  }

  console.log(products)
  return (
    <>
      <div className="flex text-xl flex-col justify-between ml-[2rem] ">
      {Object.entries(products).map(([productId, productData]) => (
        <div key={productId} className="flex justify-between items-center mt-[3rem] duration-500 hover:opacity-50">
          <h1 className="flex justify-center items-center ">
            Netflix {productData.name}
          </h1>
          {
            productId.active ? (<button className="h-[3rem] w-[10rem] bg-gray-600 rounded-sm">
            Current Package
          </button>) :
          <button onClick={() => loadCheckout(productData.prices.priceId)} className="h-[3rem] w-[10rem] bg-red-600 rounded-sm cursor-pointer">
            Subscribe
          </button>
          }
          
        </div>
      ))}
      </div>
      
    </>
  );
};


export default PlanScreen;
