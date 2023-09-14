const melissaRoute = (req, res) => {
    res.send("Melissa Heppler");
};
const nickRoute = (req, res) => {
    res.send("Lissa Heppler, AKA Blahdidah");
}; 
const sakuraRoute = (req, res) =>{
    res.send('Sakura Heppler');
};
const reiRoute = (req, res)=>{
    res.send('Rei Heppler');
};
const ayameRoute = (req, res)=>{
    res.send('Ayame Heppler');
};

module.exports = {
    melissaRoute,
    nickRoute,
    sakuraRoute,
    reiRoute,
    ayameRoute
}