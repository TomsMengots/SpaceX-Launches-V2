import { gql } from '@apollo/client'

const GET_PAST_LAUNCHES = gql`
    query getPastLaunches($limit: Int!, $offset: Int) {
        launchesPast(limit: $limit, offset: $offset) {
          mission_name
          launch_site {
            site_name_long
          }
          mission_name
          rocket {
            rocket_type
            rocket_name
          }
          details
          launch_success
          id
          links {
            mission_patch
            article_link
            video_link
            flickr_images
          }
        }
      }
`

export { GET_PAST_LAUNCHES }
