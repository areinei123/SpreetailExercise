drop database IF EXISTS furniture;
create database furniture;

\c furniture;

create table items (
  id serial primary key,
  name varchar not null,
  category varchar not null,
  price decimal not null,
  description text
)

create table item_option (
  id serial primary key,
  item_id int references items(id),
  color varchar not null,
  material varchar not null,
  image varchar not null,
  quantity int not null
)

insert into item (name, category, price) values
  ('Five Piece Leather Sectional Couch', 'sofa', 1300.00, 'An expansive sectional sofa fit for the gods! Sits several families, regardless of size.'),
  ('L-shaped Sectional', 'sofa', 329.99, 'This sectional is immesureably soft: you\'ll think you are sitting on a cloud. '),
  ('Two Piece Sofa Set', 'sofa', 600, 'A small sofa that will fit in most spaces.'),
  ('Bar Stool', 'chair', 1200, 'Perfect for the in-laws that you would rather have midly uncomfortable.'),
  ('Elegant Stool', 'chair', 150, 'Need some extra seating at the home bar you just made? Look no further.'),
  ('Odd Looking Recliner', 'chair', 180, 'You might be asking yourself: "Why does it look like this?" But you should be asking: "Why do I not own one of these comfy beasts?"'),
  ('Kingly Throne', 'chair', 10000, 'The perfect chair for binging Game of Thrones.')

insert into item_description (item_id, color, material, image, quantity)
  (1, 'white', 'canvas', 'http://www.uvfurniture.com/wp-content/3/white-modern-furniture-12.jpg', 5),
  (2, 'gray',  'microfiber', 'https://thumb1.shutterstock.com/mosaic_250/137002/549055573/stock-photo-modern-living-room-with-sofa-and-furniture-549055573.jpg', 12),
  (3, 'blue', 'microfiber', 'https://localtvwghp.files.wordpress.com/2012/10/untitled-1105.gif', 2),
  (4, 'brown', 'leather', 'https://www.fostersfurniture.com/content/images/thumbs/0001481_img-recliner-peak-in-stock.png', 20),
  (5, 'black',  'wood/metal', 'http://www.magnuslong.com/wp-content/uploads/2014/12/stock-chair-10.jpg', 45),
  (6, 'black', 'metal', 'https://d3o372dlsg9lxo.cloudfront.net/catalog/products/d8036/alt-images/enlarge/585832c3bbddbdea2800116f/D8036_120716_219_D8036.jpg', 34),
  (7, 'red', 'microfiber/metal', 'https://img00.deviantart.net/a79f/i/2016/333/b/a/chair___kingchair_png_stock_by_gilgamesh_art-d9lu6it.png', 20),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),
  -- ('', '', '', '', 0, '', 0),

