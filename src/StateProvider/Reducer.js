// All logic and data layer goes in this component


// the empty basket represent the store as an object
export const initialState ={
   basket: [
        {
             id: "jx8NrJdg",
             title: 
                "The Man Startup: How constant Innovation Creates Employment",
             price: 45.96,
             rating: 5,
             image:"https://m.media-amazon.com/images/I/41qUrJxKkmL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          },


          {
             id: "U97rDQ07",
             title: "Marcy Multifunction Steel Home Gym",
             price: 155,
             rating: 4,
             image:"https://m.media-amazon.com/images/I/71h3CfiBamL._AC_SX569_.jpg"
          },


          {
             id: "XVrVOq6D",
             title: "Controller Gear The Legend of Zelda Baseball Cap Adjustable Hat Collection",
             price: 21.99,
             rating: 4,
             image: "https://m.media-amazon.com/images/I/81L8UONqlgL._AC_UX522_.jpg",
          }

 ],
   user: null,
}

export const getBasketTotal = (basket) =>  
basket?.reduce((amount, item) => item.price + amount, 0)


// Everything inside the layer is state and manipulate the data layer with action
// An action could be add items from basket or it could be remove items from basket

const reducer = (state, action) => {
   console.log(action)
   //Big switch which takes action and have  property call type
   switch(action.type){
        case 'ADD_TO_BASKET':
        // Logic for adding item to basket
          return {
              ...state,
              basket: [...state.basket, action.item]
          }
        case 'REMOVE_FROM_BASKET':
        // Logic for Removing from basket....

            // we cloned the basket
            let newBasket = [...state.basket]

            //  We check to see if the product exists
            // go and find index if it returns an index, check all the item/basket id if it is equivalent to the aciton id
               const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

               if (index >= 0){
                    // item exists in basket, remove it
                    newBasket.splice(index, 1)
                  //   splice means to cut the new basket
               } else {
                  // red console log to warn if id not in the basket
                     console.warn(
                       `Can't remove (id: ${action.id}) as its not in basket`
                       )
               }

               // set the basket to a new value because we just slice out our basket
           return {...state, basket: newBasket}
        // If it's not add to basket or not remove from basket return ---> default
        default: 
            return state
   }
}

export default reducer
