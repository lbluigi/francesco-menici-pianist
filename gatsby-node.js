const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allContentfulHeader {
            edges {
              node {
                id
                contentful_id
                node_locale
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const singlePageTemplate = path.resolve('./src/templates/singlePage.js');
      console.log(singlePageTemplate);
      result.data.allContentfulHeader.edges.forEach(edge => {
        createPage({
          path: `/${edge.node.node_locale}`,
          component: singlePageTemplate,
          context: {
            id: edge.node.id,
            contentful_id: edge.node.contentful_id,
          },
        });
      });

      resolve();
    });
  });
};
