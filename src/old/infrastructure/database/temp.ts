import DataLoader from 'dataloader';

class ProductsDataSource {
  private dbConnection;

  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  private batchProducts = new DataLoader(async (ids) => {
    const productList = await this.dbConnection.fetchAllKeys(ids);
    // Dataloader expects you to return a list with the results ordered just like the list in the arguments were
    // Since the database might return the results in a different order the following code sorts the results accordingly
    const productIdToProductMap = productList.reduce((mapping, product) => {
      mapping[product.id] = product;
      return mapping;
    }, {});
    return ids.map((id) => productIdToProductMap[id]);
  });

  async getProductFor(id) {
    return this.batchProducts.load(id);
  }
}

// In your server file

// Set up our database, instantiate our connection,
// and return that database connection
const dbConnection = initializeDBConnection();

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        // Create a new instance of our data source for every request!
        // (We pass in the database connection because we don't need
        // a new connection for every request.)
        productsDb: new ProductsDataSource(dbConnection),
      },
    };
  },
});
