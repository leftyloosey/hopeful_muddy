const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql')
const Song = require('../models/Song')
const Set = require('../models/Set')
const User = require('../models/User')

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
})

const AuthType = new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    token: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId)
      },
    },
  }),
})

const SetType = new GraphQLObjectType({
  name: 'Set',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    userId: {
      // user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId)
      },
    },
  }),
})
// const SetType = new GraphQLObjectType({
//   name: 'Set',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//   }),
// })

const SongType = new GraphQLObjectType({
  name: 'Song',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    lyrics: { type: GraphQLString },
    length: { type: GraphQLString },
    set: {
      type: SetType,
      resolve(parent, args) {
        return Set.findById(parent.setId)
      },
    },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    sets: {
      type: new GraphQLList(SetType),
      resolve(parent, args) {
        return Set.find()
      },
    },
    set: {
      type: SetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Set.findById(args.id)
      },
    },
    setByUser: {
      type: new GraphQLList(SetType),
      args: { userId: { type: GraphQLID } },
      resolve(parent, args) {
        return Set.find({ userId: args.userId })
      },
    },
    songs: {
      type: new GraphQLList(SongType),
      resolve(parent, args) {
        return Song.find()
      },
    },
    song: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Song.findById(args.id)
      },
    },
    songBySet: {
      type: new GraphQLList(SongType),
      args: { set: { type: GraphQLID } },
      resolve(parent, args) {
        return Song.find({ setId: args.set })
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find()
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id)
      },
    },
  },
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    logUser: {
      type: UserType,
      args: {
        // id: { type: GraphQLNonNull(GraphQLID) },
        email: { type: GraphQLString },
        // password: { type: GraphQLString },
      },
      resolve(parent, args) {
        // User.find({ email: args.email })
        // return User.findOne({ id: args.id })
        return User.findOne({
          email: args.email,
          // password: args.password
        }).exec()
        // return User.findOne(

        //     args.email,
        //     // {
        //     // $match: {
        //     //     email: args.email,

        //     // },
        //     // },
        //     { new: true }
        //     );
      },
    },
    addSet: {
      type: SetType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },

        userId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const set = new Set({
          name: args.name,

          userId: args.userId,
        })
        return set.save()
      },
    },
    deleteSet: {
      type: SetType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Song.find({ setId: args.id }).then((Song) => {
          Song.forEach((song) => {
            song.remove()
          })
        })

        return Set.findByIdAndRemove(args.id)
      },
    },
    addSong: {
      type: SongType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        lyrics: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'SongStatus',
            values: {
              closer: { value: 'closer' },
              opener: { value: 'opener' },
              other: { value: 'other' },
            },
          }),
          defaultValue: 'opener',
        },
        length: {
          type: new GraphQLEnumType({
            name: 'SongLength',
            values: {
              short: { value: 'short' },
              long: { value: 'long' },
            },
          }),
          defaultValue: 'short',
        },
        setId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const song = new Song({
          name: args.name,
          lyrics: args.lyrics,
          length: args.length,
          status: args.status,
          setId: args.setId,
        })
        return song.save()
      },
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
        setId: { type: GraphQLID },
        name: { type: GraphQLString },
        lyrics: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'SongStatusUpdate',
            values: {
              closer: { value: 'closer' },
              opener: { value: 'opener' },
              other: { value: 'other' },
            },
          }),
        },
        length: {
          type: new GraphQLEnumType({
            name: 'SongLengthUpdate',
            values: {
              short: { value: 'short' },
              long: { value: 'long' },
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
              lyrics: args.lyrics,
              status: args.status,
              length: args.length,
              setId: args.setId,
            },
          },
          { new: true }
        )
      },
    },
    addUser: {
      type: UserType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          name: args.name,
          email: args.email,
          password: args.password,
        })
        return user.save()
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
})
