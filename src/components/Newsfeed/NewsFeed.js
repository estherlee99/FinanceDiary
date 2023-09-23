import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import './NewsFeed.css';


function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=stocks OR equities OR investment&sortBy=publishedAt&language=en&apiKey=edb22bc3c9fc4674b7e8945c712b4e38')
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error("Error fetching news", error);
      });
  }, []);

  return (
    <Container>
      <h2 className="my-4">Newsfeed</h2>
      {news.map((article, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <Button variant="primary" href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default NewsFeed;
