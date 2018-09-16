CREATE TABLE log (
  log_id serial primary key,
  username char(128) NOT NULL,
  goal varchar(255) NOT NULL,
  major_bonus varchar(255) NOT NULL,
  minor_bonus varchar(255) NOT NULL,
  sidequest_bonus varchar(255) NOT NULL,
  timestamp timestamp default current_timestamp);

-- Create a log

INSERT INTO log (username, goal, major_bonus, minor_bonus, sidequest_bonus ) VALUES
('b7f787b6fd62dbf0b97947310a2f786ad4e1f24fd19d8d7f6983d86802dbee23ff8e6b5114c19c633b67b2c239ecfaea97740678f0991ce1bc7d2e3870f7ac41',
 'U2FsdGVkX18eWGGDIOTy8hXQdTMSsETRAD1dB3beE/Kab1LW2+hAJvF2KFieGn8Zix2PIB38zD5pvKXowBsZFA==',
 'U2FsdGVkX1/B3qF7tSqOObqUc7xXGXTWhep9DY4+WNyPg5qnaQdJCGxW2UXKh09j',
 'U2FsdGVkX1/pTq/2BWh0ra42LeqJfBpcDprOoqhkRB2IoZb9yXZ1Ony8R14t1eL',
 'U2FsdGVkX19ZeumBva8Qr2v7MuJ4/yEtw3IGPU+JFx4=');

-- Delete the first record

DELETE FROM log WHERE log_id = 1;

-- GET ALL Logs

SELECT * FROM log;
