


var axios = require('axios');

const randevuGecmisi = async ({
   token
}) => new Promise((resolve) => {
   var config = {
      method: 'get',
      url: 'https://prd.mhrs.gov.tr/api/kurum/randevu/randevu-gecmisi',
      headers: { 
        'Authorization': token
      }
    };
    

   axios(config)
      .then(function (response) {
         resolve(response.data.data);
      })
      .catch(function (error) {
         console.log("Hata");
      });
})

module.exports = randevuGecmisi