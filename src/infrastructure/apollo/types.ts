interface Launch {
    details: string;
    id: string;
    launch_site: string;
    launch_success: string;
    links: LaunchLinks;
    mission_name: string;
    rocket: RocketModel;
}

interface RocketModel {
    rocket_name: string;
    rocket_type: string;
}

interface LaunchLinks {
    article_link: string;
    flickr_images: string[];
    mission_patch: string;
    video_link: string;
}



export { Launch }