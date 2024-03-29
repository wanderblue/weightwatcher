// *********************************************************************************
// Pet.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
const knex = require('../config/connection')

// []create and implement findWhere() method to get a simple record from database
// []create and implement update() to update a single record on database

/**
 * Queries the Pet database
 *
 * @class Pet
 */
class Top {
  constructor (table = 'topheadlines') {
    this.table = table
  }

  /**
   *
   * Find all Pets in the table
   * @returns Promise
   * @memberof Pet
   */
  findAll () {
    return knex(this.table)
       }

  /**
   * create a new record
   *
   * @param {Object} values The values to insert in the form of {column: value}
   * @returns Promise
   * @memberof Pet
   */
  create (values) {
    return knex(this.table)
      .returning('id')
      .insert(values)
  }

  /**
   * delete 1 or more records by criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @returns Promise
   * @memberof Pet
   */
  destroy (id) {
    return knex(this.table)
      .where('id', id)
      .del()
  }

  /**
   * update a specific todo
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @param {Object} values The values to update in the form of {column: value}
   * @returns Promise
   * @memberof Pet
   */
  update (where, values) {
    return knex(this.table)
      .where(where)
      .update(values)
  }

  /**
   * Finds 1 or more todos based on search criteria
   *
   * @param {Object} where The where clause in the form of {column: value}
   * @default {Object} [orderBy={}] Optional Direction to order `created_at` column
   * @returns Promise
   * @memberof Pet
   */
  find (where, orderBy = {}) {
    let mergedOrder = Object.assign({}, this.defaultOrder, orderBy)

    return knex(this.table)
      .where(where)
      .orderBy([mergedOrder]) // object must be wrapped in an array: https://knexjs.org/#Builder-orderBy
  }

  /**
   * Warning this drops and recreates table
   *
   * @returns Promise
   * @memberof Pet
   */
  reset () {
    console.log('Hola')
    return knex(this.table).truncate()
  }
  /**
   * Finds all pets by `shelter_id`
   * @param {int} id 
   */
  findPetByShelterId (id) {
    return knex
      .select(
        'petName',
        'type',
        'attitude',
        'age',
        'imgPath',
        'name',
        'address',
        'phone',
        'city',
        'state',
        'zipCode'
      )
      .where({shelter_id: id})
      .from(this.table)
      .innerJoin('shelter_tb', 'pets_tb.shelter_id', 'shelter_tb.id')
  }
}

module.exports = new Top()

