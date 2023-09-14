const melissaRoute = (req, res) => {
    res.send("Melissa Heppler");
};
const nickRoute = (req, res) => {
    res.send("Lissa Heppler, AKA Blahdidah");
}; 

module.exports = {
    melissaRoute,
    nickRoute
}