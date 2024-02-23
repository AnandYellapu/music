// const axios = require('axios');

// const recentMatches = async (req, res) => {
//   try {
//     const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
//       headers: {
//         'X-RapidAPI-Key': '59b90ce3c2mshb7445fb3fc42bcfp14d9b6jsn43e90acc2754',
//         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': '59b90ce3c2mshb7445fb3fc42bcfp14d9b6jsn43e90acc2754',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



const matchCenter = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const teamInfo = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/35878/team/9', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const comments = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  

  const overs = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/overs', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const scard = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const hscard = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/hscard', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const leanback = async (req, res) => {
    try {
      const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/leanback', {
        headers: {
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
      });
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  module.exports = {
    recentMatches,
    matchCenter,
    teamInfo,
    comments,
    overs,
    scard,
    hscard,
    leanback,
  }
