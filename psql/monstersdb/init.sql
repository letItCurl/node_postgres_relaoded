CREATE TABLE wizards(
  name character varying(50),
  power character varying(50)
);

CREATE TABLE elves(
  name character varying(50),
  speed real
);

CREATE TABLE hobbits(
  name character varying(50),
  personality character varying(50)
);

INSERT INTO wizards(name, power)
VALUES ('hello', 'a'), ('world', 'b'), ('man', 'c');

INSERT INTO elves(name, speed)
VALUES ('a', 1), ('z', 2), ('e', 3);

INSERT INTO hobbits(name, personality)
VALUES ('aaa', 'poi'), ('bbb', 'uyt'), ('nbv', 'mlk');
