import React, { useEffect, useState } from "react";
import db from "../src/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../src/features/userSlice";

const PlanScreen = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser)

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
    const docRef = await db.collection('customers').doc(user.uid).collection("checkout_sessions").add({

        price:priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
    });

    docRef.onSnapshot(async(snap) => {
        const {error, sessionId}  = snap.data();

        if(error) {
            alert(`An error Occured: ${error.message}`)
        }

        if(sessionId){
            const stripe = await loadStripe()
        }
    })
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
            productId.active ? <button className="h-[3rem] w-[10rem] bg-gray-600 rounded-sm">
            Current Package
          </button> :
          <button className="h-[3rem] w-[10rem] bg-red-600 rounded-sm cursor-pointer">
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
