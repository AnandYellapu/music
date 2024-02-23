import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentMatches = () => {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('http://localhost:1111/recent-matches'); // Assuming your Express server is running locally on port 3000
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setError(error.message || 'An error occurred while fetching matches.');
      }
    };

    fetchMatches();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recent Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match.id}>{match.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecentMatches;
