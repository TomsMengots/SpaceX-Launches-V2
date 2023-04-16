interface ILaunch {
  details: string;
  id: string;
  launch_site: string;
  launch_success: string;
  links: ILaunchLinks;
  mission_name: string;
  rocket: IRocketModel;
  launch_date_utc: string;
}

interface IRocketModel {
  rocket_name: string;
}

interface ILaunchLinks {
  article_link: string;
  flickr_images: string[];
  video_link: string;
}

export { ILaunch };
