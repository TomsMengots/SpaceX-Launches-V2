import { gql } from '@apollo/client';

const GET_PAST_LAUNCHES = gql`
  query getPastLaunches($limit: Int!, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      mission_name
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
      }
      details
      launch_success
      id
      launch_date_utc
      links {
        article_link
        video_link
        flickr_images
      }
    }
  }
`;

const GET_LAUNCH_BY_ID = gql`
  query getLaunchById($id: ID!) {
    launch(id: $id) {
      details
      launch_site {
        site_id
        site_name
      }
      launch_success
      upcoming
      rocket {
        rocket {
          company
          cost_per_launch
        }
      }
    }
  }
`;

export { GET_PAST_LAUNCHES, GET_LAUNCH_BY_ID };
