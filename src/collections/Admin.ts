import { CollectionConfig } from 'payload'

const AdminMembers: CollectionConfig = {
  slug: 'admin-members',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      type: 'text',
      required: true,
    },
    {
      name: 'qualification',
      type: 'text',
      required: true,
    },
    {
      name: 'experience',
      type: 'text',
      required: true,
    },

    {
      name: 'email',
      type: 'email',
      required: true,
    },

    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}

export default AdminMembers
