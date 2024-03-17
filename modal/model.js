const mongoose = require('mongoose');

// Définition du schéma pour chaque type de données
const popularChannelsSchema = new mongoose.Schema({
  id: Number,
  image: String
});

const trendingSchema = new mongoose.Schema({
  id: Number,
  image: String,
  title: String,
  author: String,
  readMins: Number
});

const titlesSchema = new mongoose.Schema({
  id: Number,
  title: String
});

const authorsSchema = new mongoose.Schema({
  id: Number,
  author: String
});

const readMinsSchema = new mongoose.Schema({
  id: Number,
  readMins: Number
});

// Création des modèles pour chaque type de données
const PopularChannels = mongoose.model('PopularChannels', popularChannelsSchema);
const Trending = mongoose.model('Trending', trendingSchema);
const Titles = mongoose.model('Titles', titlesSchema);
const Authors = mongoose.model('Authors', authorsSchema);
const ReadMins = mongoose.model('ReadMins', readMinsSchema);

// Création des instances de modèle avec les données fournies
const popularChannelsData = [
  { id: 1, image: "https://images.unsplash.com/photo-1523987659364-8ad26ea657ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=frank-albrecht-EOG8BeJfz4I-unsplash.jpg" },
  // Ajoutez les autres éléments ici
];

const trendingData = [
  { id: 1, image: "https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jonathan-farber-gjHmip_Lmg4-unsplash.jpg", title: "The Secrets to popular podcast", author: "Julia rose", readMins: 53 },
  // Ajoutez les autres éléments ici
];

// Insérer les données dans la base de données
PopularChannels.insertMany(popularChannelsData)
  .then(() => console.log('Données des chaînes populaires insérées avec succès'))
  .catch(err => console.error('Erreur lors de insertion des données des chaînes populaires :', err));

Trending.insertMany(trendingData)
  .then(() => console.log('Données tendance insérées avec succès'))
  .catch(err => console.error('Erreur lors de linsertion des données tendance :', err));

// Répétez le processus pour les autres collections si nécessaire

module.exports = { PopularChannels, Trending, Titles, Authors, ReadMins };
