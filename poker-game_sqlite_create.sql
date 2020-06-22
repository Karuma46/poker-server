CREATE TABLE user (
	id integer PRIMARY KEY AUTOINCREMENT,
	username varchar,
	pin integer,
	email varchar
);

CREATE TABLE card (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar,
	suit integer,
	rank integer,
	value integer
);

CREATE TABLE game (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar,
	status varchar,
	lobby_id integer,
	winner_id integer,
	start_datetime datetime,
	end_datetime integer,
	timer datetime
);

CREATE TABLE player (
	id integer PRIMARY KEY AUTOINCREMENT,
	user_id integer,
	game_id integer,
	index_number integer
);

CREATE TABLE deck (
	id integer PRIMARY KEY AUTOINCREMENT,
	game_id integer,
	card_id integer,
	player_id integer
);

CREATE TABLE lobby (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar,
	status varchar
);

CREATE TABLE membership (
	id integer PRIMARY KEY AUTOINCREMENT,
	player_id integer,
	lobby_id integer,
	is_active text
);

CREATE TABLE user_stats (
	id integer PRIMARY KEY AUTOINCREMENT,
	game_wins integer,
	games_played integer,
	most_cards_held integer,
	highest_score_count integer,
	user_id integer
);

