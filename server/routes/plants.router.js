const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//GET all plant names
router.get('/', (req, res) => {
  const queryText = `
    SELECT "name" FROM "plants";
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in GET /api/plants', error);
      res.sendStatus(500);
    });
});

//GET specific plant details
router.get('/:id', (req, res) => {
  const queryText = `
    SELECT * FROM "plants"
      WHERE id=$1;
  `;
  pool
    .query(queryText, [req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('error in GET /api/plants/:id', error);
      res.sendStatus(500);
    });
});

//CREATE new plant details
router.post('/', (req, res) => {
  const newPlant = req.body;
  const queryText = `
    INSERT INTO "plants"
      ("name", "kingdom", "clade", "order", "family", "subfamily", "genus")
      VALUES
      ($1, $2, $3, $4, $5, $6, $7);
  `;
  const queryValues = [
    newPlant.name,
    newPlant.kingdom,
    newPlant.clade,
    newPlant.order,
    newPlant.family,
    newPlant.subfamily,
    newPlant.genus,
  ];
  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('error in POST /api/plants', error);
      res.sendStatus(500);
    });
});

//UPDATE plant details
router.put('/:id', (req, res) => {
  const updatedPlant = req.body;

  const queryText = `
    UPDATE "plants"
      SET 
        "name"=$1, 
        "kingdom"=$2, 
        "clade"=$3, 
        "order"=$4, 
        "family"=$5, 
        "subfamily"=$6, 
        "genus"=$7
      WHERE
        id=$8;
  `;

  const queryValues = [
    updatedPlant.name,
    updatedPlant.kingdom,
    updatedPlant.clade,
    updatedPlant.order,
    updatedPlant.family,
    updatedPlant.subfamily,
    updatedPlant.genus,
    updatedPlant.id,
  ];

  pool
    .query(queryText, queryValues)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in PUT /api/plants/:id', error);
      res.sendStatus(500);
    });
});

//DELETE plant
router.delete('/:id', (req, res) => {
  const queryText = `
    DELETE FROM "plants" 
      WHERE id=$1
  `;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in DELETE /api/plants/:id', error);
      res.sendStatus(500);
    });
});

module.exports = router;
