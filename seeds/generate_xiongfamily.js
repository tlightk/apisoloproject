exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('xiong_family').del()
    .then(function () {
      // Inserts seed entries
      return knex('xiong_family').insert([
        {id: 1, first_name: 'Danny', middle_name: "Chaidan", age: 55, birthday: "08-15-1965", birthplace: "Laos", likes: "Pokemon GO", dislikes: "Broken things"},
        {id: 2, first_name: 'Mee', middle_name: "", age: 51, birthday: "09-25-1969", birthplace: "Laos", likes: "Youtube", dislikes: "Unfinished chores"},
        {id: 3, first_name: 'Cho', middle_name: "", age: 34, birthday: "09-11-1986", birthplace: "Fresno, CA", likes: "Movies", dislikes: "Work"},
        {id: 4, first_name: 'Sao', middle_name: "Nelson", age: 33, birthday: "10-04-1987", birthplace: "Fresno, CA", likes: "PC games", dislikes: "Computer crashes"},
        {id: 5, first_name: 'Tong', middle_name: "Kor", age: 32, birthday: "08-25-1988", birthplace: "Fresno, CA", likes: "Console games", dislikes: "Sleeping late"},
        {id: 6, first_name: 'Clay', middle_name: "Va", age: 30, birthday: "06-01-1990", birthplace: "Fresno, CA", likes: "Japan", dislikes: "Cockroaches"},
        {id: 7, first_name: 'Shirley', middle_name: "Pajchou", age: 29, birthday: "07-13-1991", birthplace: "Fresno, CA", likes: "Origami", dislikes: "Cleaning"},
        {id: 8, first_name: 'Susie', middle_name: "Tajying", age: 28, birthday: "05-20-1992", birthplace: "Fresno, CA", likes: "Volleyball", dislikes: "Washing dishes"},
        {id: 9, first_name: 'Judith', middle_name: "Tsai", age: 26, birthday: "10-20-1994", birthplace: "Fairfield, CA", likes: "Dogs", dislikes: "Umbrellas"},
        {id: 10, first_name: 'Kathy', middle_name: "Gaolachi", age: 22, birthday: "10-05-1998", birthplace: "Minneapolis, MN", likes: "Roblox", dislikes: "Dishonest people"}
      ]);
    });
};
