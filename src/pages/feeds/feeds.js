import Card from 'react-bootstrap/Card';



import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
  const Feeds = React.memo((props) => {
        React.useEffect(() => {
          const script = document.createElement('script');
      
          script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=your-app-id&autoLogAppEvents=1";
          script.async = true;
      
          document.body.appendChild(script);
      
          return () => {
            document.body.removeChild(script);
          }
        }, []);
        
        return (
          <React.Fragment>
            <div id="fb-root"></div>
            <Card>
      <Card.Body style={{textAlign: "center"}}><div 
              class="fb-page"
              data-href="https://www.facebook.com/SaylaniMassTraining/"
              data-tabs="timeline"
              data-width="1000"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
        
            >
              <blockquote
                cite="https://www.facebook.com/SaylaniMassTraining/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/SaylaniMassTraining/">Your Page</a>
              </blockquote>
            </div></Card.Body>
    </Card>
            
          </React.Fragment>
        );
      });;

      

export default Feeds;
