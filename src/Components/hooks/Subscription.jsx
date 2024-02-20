import React, { useEffect, useState } from 'react'

const Subscription = () => {
    const [subscriptionData, setSubscriptionData] = useState([]);

    useEffect(()=>{

        const subscribe = setupSubscription();

        //cleanup function
        return ()=>{
            subscribe.unsubscribe()
        }

    },[])

    const setupSubscription = ()=>{
      const subscribe= {
            data:'subscripton data',
            unsubscribe : ()=>{
                console.log('unsubscribed');
            }
        }
        setTimeout(()=>{
            setSubscriptionData(subscribe.data)
        },3000)
    }
  return (
    <div>
    <h1>Subscription Example</h1>
    <p>Subscription Data: {subscriptionData}</p>
  </div>
  )
}

export default Subscription