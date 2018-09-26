drop database IF EXISTS furniture;
create database furniture;

\c furniture;

create table items (
  id serial primary key,
  name varchar not null,
  category varchar not null,
  price decimal not null,
  description text
);

create table item_option (
  id serial primary key,
  item_id int references items(id),
  color varchar not null,
  material varchar not null,
  image varchar not null,
  quantity int not null
);

insert into items (name, category, price, description) values
  ('Five Piece Leather Sectional Couch', 'sofa', 1300.00, 'An expansive sectional sofa fit for the gods! Sits several families, regardless of size.'),
  ('Loveseat', 'sofa', 329.99, 'This loveseat is immesureably soft: you will think you are sitting on a cloud. '),
  ('Two Piece Sofa Set', 'sofa', 600, 'A small sofa that will fit in most spaces, with a smaller chair that will fit in another, smaller space.'),
  ('Bar Stool', 'chair', 120, 'Perfect for the in-laws that you would rather have midly uncomfortable.'),
  ('Elegant Stool', 'chair', 150, 'Need some extra seating at the home bar you just made? Look no further.'),
  ('Odd Looking Recliner', 'chair', 180, 'You might be asking yourself: "Why does it look like this?" But you should be asking: "Why do I not own one of these comfy beasts?"'),
  ('Kingly Throne', 'chair', 10000, 'The perfect chair for binging Game of Thrones.');

insert into item_option (item_id, color, material, image, quantity) values
  (1, 'white', 'canvas', 'http://www.uvfurniture.com/wp-content/3/white-modern-furniture-12.jpg', 5),
  (1, 'gray', 'canvas', 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Fsignature_design_by_ashley%2Fcolor%2Fchamberly%20-%201195589344_2430216%2B34%2B77%2B46%2B56-b0.jpg?width=1024&height=768&trim.threshold=50&trim.percentpadding=10', 5),
  (2, 'gray',  'microfiber', 'https://thumb1.shutterstock.com/mosaic_250/137002/549055573/stock-photo-modern-living-room-with-sofa-and-furniture-549055573.jpg', 12),
  (2, 'black',  'leather', 'http://www.bestartisticinteriors.com/wp-content/uploads/2018/06/black-reclining-loveseat-cantrell-double-reclining-loveseat-jvixcuk-.jpg', 12),
  (3, 'blue', 'microfiber', 'https://localtvwghp.files.wordpress.com/2012/10/untitled-1105.gif', 2),
  (3, 'red', 'microfiber', 'http://thecubicleviews.com/media/upload/fantastic-red-living-room-set-living-room-new-cheap-living-room-sets-amazing-cheap-modern-red.jpg', 2),
  (4, 'black', 'metal', 'https://i5.walmartimages.com/asr/c7ce7202-8f46-41d7-a286-5d88fb5d0210_1.f576ec13753d2ed2f0637effddd4b4df.jpeg', 34),
  (4, 'blue', 'metal', 'https://www.eurway.com/Shared/Images/Product/Truss-Bar-Stool-Blue/truss-blue-bar-stool.jpg', 34),
  (5, 'black',  'metal', 'http://www.magnuslong.com/wp-content/uploads/2014/12/stock-chair-10.jpg', 45),
  (5, 'gray',  'metal', 'https://i5.walmartimages.com/asr/43c1fb82-5920-47b3-9582-a52f15ab91c1_1.f5ae1920bc29036c4a0dbb99c9529421.jpeg', 45),
  (6, 'brown', 'leather', 'https://www.fostersfurniture.com/content/images/thumbs/0001481_img-recliner-peak-in-stock.png', 20),
  (6, 'yellow', 'microfiber', 'https://smhttp-ssl-77687.nexcesscdn.net/media/catalog/product/G/5/G551-RC-recliner-2.jpg', 20),
  (7, 'red', 'microfiber', 'https://img00.deviantart.net/a79f/i/2016/333/b/a/chair___kingchair_png_stock_by_gilgamesh_art-d9lu6it.png', 20),
  (7, 'gray', 'metal', 'https://images-na.ssl-images-amazon.com/images/I/51eYicW4RyL.jpg', 20);
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

