//please note that your router name must start with botpress-, else 
//botpress would throw an error and it is not going to work
const router = bp.getRouter('botpress-whatever_name_you_want');

//you can use it like a normal express router.

//POST request
router.post(`/okey-dokey`, (req, res) => {

  res.status(200).send(`Ping!`)
});

//GET request
router.get(`/okay-dokey`,(req, res, next) => {
  

  res.status(200).send(`Pong!`);
})