module.exports = {
    types: [
        { id: 1, name: "Comedy" },
        { id: 2, name: "Drama" },
        { id: 3, name: "Science-Fiction" },
        { id: 4, name: "Action" },
        { id: 5, name: "Adventure" },
    ],
    movies: [
        {id: 1, name: "Star Wars - Episode 3", director: "George Lucas", length: 140, series: true, banner: "images/starwars3.jpg", type_id: 3},
        {id: 2, name: "Inception", director: "Christopher Nolan", length: 105, series: false, banner: "images/inception.jpg", type_id: 3},
        {id: 3, name: "The Matrix", director: "Lana Wachowsci", length: 145, series: true, banner: "images/thematrix.jpg", type_id: 3},
        {id: 4, name: "The Godfather", director: "Francisc Ford", length: 76, series: true, banner: "images/thegodfather.jpg", type_id: 2},
        {id: 5, name: "Schindler's List", director: "Steven Spielberg", length: 195, series: false, banner: "images/schindlerslist.jpg", type_id: 2},
        {id: 6, name: "Gladiator", director: "Ridley Scott", length: 169, series: false, banner: "images/gladiator.jpg", type_id: 2},
        {id: 7, name: "Bad Grandpa", director: "Jeff Tremaine", length: 92, series: false, banner: "images/badgrandpa.jpg", type_id: 1},
        {id: 8, name: "Meet the Fockers", director: "Jay Roach", length: 115, series: false, banner: "images/meetthefockers.jpg", type_id: 1},
        {id: 9, name: "Borat", director: "Larry Charles", length: 82, series: false, banner: "images/borat.jpg", type_id: 1},
        {id: 10, name: "South Park", director: "Trey Parker", length: 81, series: true, banner: "images/southpark.jpg", type_id: 1},
        {id: 11, name: "Army of the Dead", director: "Zack Snyder", length: 148, series: false, banner: "images/armyofthedead.jpg", type_id: 4},
        {id: 12, name: "The Fast and the Furious", director: "Rob Cohen", length: 106, series: true, banner: "images/thefastandthefurious.jpg", type_id: 4},
        {id: 13, name: "Mortal Kombat", director: "Simon McQuoid", length: 110, series: true, banner: "images/mortalkombat.jpg", type_id: 4},
        {id: 14, name: "Fall of Hyperion", director: "Rex Piano", length: 86, series: false, banner: "images/fallofhyperion.jpg", type_id: 5},
        {id: 15, name: "Justice League", director: "Zack Snyder", length: 242, series: false, banner: "images/justiceleague.jpg", type_id: 5},

    ]
}
