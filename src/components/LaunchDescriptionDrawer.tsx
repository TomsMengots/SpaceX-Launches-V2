import {
  Drawer,
  DrawerBody,
  Text,
  Flex,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  Heading,
  Link,
  DrawerFooter,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ILaunch } from 'src/infrastructure/apollo/types';
import { MdOutlineHideImage } from 'react-icons/md';

interface IProps {
  launch: ILaunch;
  onClose: Function;
}

const LaunchDescriptionDrawer = ({ launch, onClose }: IProps) => {
  const closeDrawer = () => onClose();
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Drawer onClose={closeDrawer} isOpen={true} size='md'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader mr={12}>{`${launch.mission_name} Launch`}</DrawerHeader>
        <DrawerBody>
          {!!launch.links.flickr_images.length && (
            <SimpleGrid columns={3} spacing={2}>
              {launch.links.flickr_images.slice(0, 6).map((imageUrl, index) => (
                <Link key={`${imageUrl}-${index}`} href={imageUrl} target='_blank' rel='noopener noreferrer'>
                  <Image src={imageUrl} h='100%' minH={24} maxH={24} borderRadius={8} objectFit='cover' w='100%' />
                </Link>
              ))}
            </SimpleGrid>
          )}

          {!launch.links.flickr_images.length && (
            <Flex flexDirection='column' alignItems='center' justifyContent='center' height={48}>
              <MdOutlineHideImage size={48} />
              <Text fontSize='sm' color={textColor} mt='4' textTransform='capitalize'>
                SpaceX haven't provided any images from the launch
              </Text>
            </Flex>
          )}

          <Heading as='h6' size='sm' mt={8} mb={2}>
            Launch Details
          </Heading>
          <Text color={textColor} fontSize='sm' lineHeight='tall'>
            {launch.details || 'No Details Provided By SpaceX'}
          </Text>
          <Flex w='100%' justifyContent='flex-end'>
            <Link
              href={launch.links.article_link}
              target='_blank'
              rel='noopener noreferrer'
              mt={2}
              color='purple.500'
              fontSize='sm'
              fontWeight={600}
            >
              Read More
            </Link>
          </Flex>
        </DrawerBody>
        <DrawerFooter h={24}>
          <Link
            href={launch.links.video_link}
            target='_blank'
            rel='noopener noreferrer'
            backgroundColor='purple.500'
            w='100%'
            color='white'
            px={4}
            py={3}
            fontWeight={700}
            rounded='8'
          >
            <Flex w='100%' alignItems='center' justifyContent='center'>
              View Launch Video
            </Flex>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { LaunchDescriptionDrawer };
