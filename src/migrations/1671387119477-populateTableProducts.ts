import { MigrationInterface, QueryRunner } from 'typeorm';

export class populateTableProducts1671387119477 implements MigrationInterface {
  name = 'populateTableProducts1671387119477';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("coca", "coca gelada", 5.5 , "https://www.kerokery.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/k/kkr-_157-sku-801___bebidas__coca-cola-lata-350ml.jpg", "DRINK");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("x-burguer", "x-burgão", 10, "https://i0.wp.com/adegaehamburgueriarodrigues.dicavaliosa.com.br/wp-content/uploads/2022/03/xburguer-e1593619359308-1.png?fit=250%2C250&ssl=1", "LUNCH");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("x-salada", "x -saudável", 12, "https://big10.com.br/wp-content/uploads/2021/03/xburguer-1-838.jpg", "LUNCH");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("x-bacon", "x-porcão", 14, "https://embutidosbonatti.ind.br/temp/BIN_57_V9Fb0BwK.jpg", "LUNCH");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Guarana", "guarana quente", 5.2, "https://www.imigrantesbebidas.com.br/bebida/images/products/full/1935-refrigerante-guarana-antarctica-lata-350ml.jpg", "DRINK");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Suco laranja", "suquinho docinho", 6.6, "https://comeonburger.com.br/wp-content/uploads/2019/12/laranja.jpg", "DRINK");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("batata frita", "batatinhas fritas", 10, "http://yamamurasushi.com.br/image/cache/data/batata%20frita-500x500.jpg", "SERVING");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("fritas com bacon", "fritas com chader e bacon", 12, "https://i.pinimg.com/originals/88/28/89/8828894a5224e711d6a290c132e77aaf.jpg", "SERVING");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Porção Polenta", "Polentinha frtia", 12, "https://media-cdn.tripadvisor.com/media/photo-s/0e/d6/06/8b/porcao-polenta-frita.jpg", "SERVING");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Milk-Shake", "Leite batido", 9, "https://www.marvi.com.br/img/receitas/025627000000_24092019.jpg", "DESSERT");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Bolo de pote", "Sabor: Pote", 12, "https://img.itdg.com.br/tdg/images/recipes/000/177/096/355179/355179_original.jpg", "DESSERT");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Brisadeiro", "Brigadeiro duvidoso", 5, "https://www.marajoaraalimentos.com.br/2018/wp-content/uploads/2020/07/349-scaled.jpg", "DESSERT");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Iphone do Ian", "O tal do Iphone", 7, "https://images-americanas.b2w.io/produtos/3212465361/imagens/headset-barato-multimidia-hbl-101-fortrek-pc-notebook/3212465379_1_large.jpg", "OTHERS");',
    );
    await queryRunner.query(
      'INSERT INTO product (name, description, price, imageUri, category) VALUES ("Guarana Jesus", "O guarana abençoado", 1.5, "https://cf.shopee.com.br/file/714aa7a02b40af1b194c74f287ea2ab7", "DRINK");',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM product');
  }
}
