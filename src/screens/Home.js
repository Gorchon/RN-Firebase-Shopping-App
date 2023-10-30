import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {database} from '../config/fb';
import {collection, onSnapshot, query, orderBy, QuerySnapshot} from 'firebase/firestore';
import Product from '../components /Product';


export default function Home(){
    const navigation = useNavigation();
    const [Products, setProducts] = React.useState([]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <RN.Button title="Add" onPress={() => navigation.navigate("Add")} />
          ),
        });
      }, [navigation]);

    React.useEffect(() => {
        const collectionRef = collection(database, "products");
        const q = query(collectionRef, orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          // onSnapshot is a listener that listens to changes in the database in realtime
          console.log("querySnapshot unsusbscribe");
          setProducts(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              emoji: doc.data().emoji,
              name: doc.data().name,
              price: doc.data().price,
              isSold: doc.data().isSold,
              createdAt: doc.data().createdAt,
            }))
          );
        });
        return unsubscribe; // unsubscribe from the listener when the component is unmounting
        // because it avoids memory leaks
      }, []);
    return (
        <RN.View>
            <RN.Text> Products</RN.Text>
            {Products.map(product => <Product key={product.id} {...product} />)} 
            <RN.Button title="Go to Add Screen" onPress={() => navigation.navigate('Add')} />
        </RN.View>
    );
}