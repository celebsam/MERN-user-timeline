import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const Posts = () => {
   return (
      <Container>
         <h1>Posts</h1>

         <div
            style={{
               display: "grid",
               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
               gap: "1rem",
            }}
         >
            <Card>
               <Card.Img fluid variant="top" src="https://picsum.photos/300" />
               <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img fluid variant="top" src="https://picsum.photos/400" />
               <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
            <Card>
               <Card.Img fluid variant="top" src="https://picsum.photos/410" />
               <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
               </Card.Body>
            </Card>
         </div>
      </Container>
   );
};

export default Posts;
