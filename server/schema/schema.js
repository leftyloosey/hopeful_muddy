const {  
    GraphQLID, 
    GraphQLString, 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLList, 
    GraphQLNonNull,
    GraphQLEnumType } = require('graphql');
const Song = require('../models/Song')
const Set = require('../models/Set')

//Set type
const SetType = new GraphQLObjectType({
    name: 'Set',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    })
});

//song type
const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        status: {type: GraphQLString},
        description: { type: GraphQLString },
        set: {
            type: SetType,
            resolve(parent, args) {
                return Set.findById(parent.setId)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        sets: {
            type: new GraphQLList(SetType),
            resolve(parent, args) {
                return Set.find()
            }
        },
        songs: {
            type: new GraphQLList(SongType),
            resolve(parent, args) {
                return Song.find()
            }
        },
        song: {
            type: SongType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //eventually mongoose function would go here
                return Song.findById(args.id)
            }
        },
        set: {
            type: SetType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                //eventually mongoose function would go here
                return Set.findById(args.id)
            }
        }
    }

});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSet: {
            type: SetType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const set = new Set({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                })
                return set.save()
            }
        },
        deleteSet: {
            type: SetType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                Song.find({ setId: args.id }).then(
                    (Song) => {
                        Song.forEach(song => {
                            song.remove()
                        })
                    }
                )

                return Set.findByIdAndRemove(args.id)
            }
        },

        addSong: {
            type: SongType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                status: { 
                    type: new GraphQLEnumType({
                        name: 'SongStatus',
                        values: {
                            'new': { value: 'not started' },
                            'progress': { value: 'in progress' },
                            'completed': { value: 'completed' }
                        }
                    }),
                    defaultValue: 'not started',
                },
                setId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const song = new Song({
                    name: args.name,
                    description: args.description,
                    status: args.status,
                    setId: args.setId,
                  });
                return song.save()
            }
        },

        deleteSong: {
            type: SetType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                

                return Song.findByIdAndRemove(args.id)
            },
    },
        updateSong: {
            type: SongType,
            args: {
            id: { type: GraphQLNonNull(GraphQLID) },
            name: { type: GraphQLString },
            description: { type: GraphQLString },
            status: {
                type: new GraphQLEnumType({
                name: 'SongStatusUpdate',
                values: {
                    new: { value: 'Not Started' },
                    progress: { value: 'In Progress' },
                    completed: { value: 'Completed' },
                },
                }),
            },
            },
            resolve(parent, args) {
            return Song.findByIdAndUpdate(
                args.id,
                {
                  $set: {
                    name: args.name,
                    description: args.description,
                    status: args.status,
                  },
                },
                  { new: true }
          );
      },
    },
  },
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutation
})