import React, { useEffect } from 'react';
import { ModalContainer, ModalContent } from '../../../../components/Modal/Modal';
import Box from '../../../../components/Box/Box';
import { Text } from '../../../../components/Card/Card';
import { Button, Divider, HelperText, TextInput } from 'react-native-paper';
import { theme } from '../../../../infrastructure/styleComponentTheme';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreatePlayListMutation } from '../../../../state/features/playList/playList.apiSlice';
import { checkUserIsLoggedIn } from '../../../../utils/helper';

export interface CreatePlayListInterface {
   hideModal: () => void;
   visible: boolean;
}

interface StateInterface {
   title: string;
}

const schema = yup.object().shape({
   title: yup.string().required().typeError('title must be required!'),
});

const CreatePlayList = ({ hideModal, visible }: CreatePlayListInterface) => {
   const {
      handleSubmit,
      formState: { errors },
      control,
      reset,
   } = useForm<StateInterface>({
      resolver: yupResolver(schema),
   });

   const [createPlaylist, { isLoading: createPlaylistLoading, isSuccess: createPlaylistSuccess }] =
      useCreatePlayListMutation();

   const submitHandler = async function (data: StateInterface) {
      const userObject = await checkUserIsLoggedIn();
      const userId = userObject?.user?._id;
      if (userId) {
         createPlaylist({ userId, playListName: data.title });
      }
   };

   useEffect(() => {
      if (createPlaylistSuccess) {
         hideModal();
         reset();
      }
   }, [createPlaylistSuccess]);

   return (
      <ModalContainer hideModal={hideModal} visible={visible}>
         <ModalContent>
            <Box>
               <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                  <Text fontWeight={400} fontSize={theme.sizes.fontSize['text-2xl']}>
                     New Play list
                  </Text>
               </Box>
               <Divider />
            </Box>
            <Box>
               <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                  <Controller
                     name="title"
                     control={control}
                     render={({ field: { onChange, value } }) => (
                        <TextInput value={value} onChangeText={onChange} placeholder="title" mode="outlined" />
                     )}
                  />
                  {errors?.title?.message ? <HelperText type="error">{errors.title.message}</HelperText> : null}
               </Box>
               <Divider />
            </Box>
            <Box>
               <Box padding={{ direction: { position: 'all', size: theme.sizes.spacing.lg } }}>
                  <Button
                     loading={createPlaylistLoading}
                     icon="lock"
                     mode="contained-tonal"
                     onPress={handleSubmit(submitHandler)}
                  >
                     Press me
                  </Button>
               </Box>
               <Divider />
            </Box>
         </ModalContent>
      </ModalContainer>
   );
};

export default CreatePlayList;
