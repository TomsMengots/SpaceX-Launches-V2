interface Launch {
  details: string;
  id: string;
  launch_site: string;
  launch_success: string;
  links: LaunchLinks;
  mission_name: string;
  rocket: RocketModel;
  launch_date_utc: string;
}

interface RocketModel {
  rocket_name: string;
}

interface LaunchLinks {
  article_link: string;
  flickr_images: string[];
  video_link: string;
}

export { Launch };
