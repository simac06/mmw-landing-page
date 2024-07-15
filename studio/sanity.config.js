import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import {deskStructure} from './components/deskStructure'

import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

const projectId = process.env.SANITY_STUDIO_API_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_API_DATASET

export default defineConfig({
  name: 'default',
  title: 'mmw',

  projectId,
  dataset,
  basePath: '/studio',

  plugins: [structureTool({structure: deskStructure}), visionTool(), media(), vercelDeployTool()],

  schema: {
    types: schemaTypes,
  },
})
