import { gql } from '@apollo/client'

const GET_PAST_LAUNCHES = gql`
    query getPastLaunches {
        launchesPast {
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
        }
      }
    
`

export { GET_PAST_LAUNCHES }
