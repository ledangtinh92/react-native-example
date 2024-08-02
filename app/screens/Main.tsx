import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    PanResponder,
    TouchableWithoutFeedback,
    UIManager,
    findNodeHandle
} from 'react-native';
import ImageViewer from 'app/components/ImageViewer';
import ButtonCustom from 'app/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from 'react';
import IconButton from 'app/components/IconButton';
import CircleButton from 'app/components/CircleButton';
import EmojiList from 'app/components/EmojiList';
import EmojiPicker from 'app/components/EmojiPicker';
import EmojiSticker from 'app/components/EmojiSticker';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import DiskImage from 'dom-to-image';

export default function Main() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState(null);
    const PlaceholderImage = require('assets/images/background-image.png')

    const [position, setPosition] = useState({x: 0, y: 0});
    const [dragging, setDragging] = useState(false);

    const imageRef = useRef<View | null>(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        });

        if (!result.canceled) {
            console.log(result);
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.');
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
        setPickedEmoji(null);
    };

    const onAddSticker = () => {
        setIsModalVisible(true);
    };

    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {
        if (Platform.OS !== 'web') {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1
                });
                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    alert('Saved!');
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                const dataUrl = await DiskImage.toJpeg(imageRef.current, {
                    quality: 0.95,
                    width: 320,
                    height: 440
                });

                let link = document.createElement('a');
                link.download = 'sticker-smash.jpeg';
                link.href = dataUrl;
                link.click();
            } catch (e) {
                console.log(e);
            }
        }
    };

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gestureState) => {
                setDragging(true);
                setPosition({
                    x: gestureState.x0,
                    y: gestureState.y0
                });
                //console.log("onPanResponderGrant" + dragging);
                //console.log("onPanResponderGrant  " + position.x + " " + position.y);
            },
            onPanResponderMove: (evt, gestureState) => {
                setPosition({
                    x: gestureState.moveX,
                    y: gestureState.moveY
                });
                if (imageRef.current) {
                    const handle = findNodeHandle(imageRef.current);
                    if (handle) {
                        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
                            console.log('Position XX:', x);
                            console.log('Position YY:', y);
                            console.log('Position X:', pageX);
                            console.log('Position Y:', pageY);
                            console.log('Width:', width);
                            console.log('Height:', height);
                        });
                    }
                }


                //console.log("onPanResponderMove  " + gestureState.moveX + " " + gestureState.moveY);
            },
            onPanResponderRelease: () => {
                setDragging(false);
            }
        })
    ).current;


    return (
        <View style={ styles.mainContainer }>
            <View style={ styles.imageContainer } { ...panResponder.panHandlers }>
                <View style={ styles.images } ref={ imageRef } collapsable={ false }
                >
                    <ImageViewer placeholderImageSource={ PlaceholderImage } selectedImage={ selectedImage }/>
                    { pickedEmoji && <EmojiSticker imageSize={ 40 } stickerSource={ pickedEmoji }/> }
                </View>
            </View>
            { showAppOptions ? (
                <View style={ styles.optionsContainer }>
                    <View style={ styles.optionsRow }>
                        <IconButton icon="refresh" label="Reset" onPress={ onReset }/>
                        <CircleButton onPress={ onAddSticker }/>
                        <IconButton icon="save-alt" label="Save" onPress={ onSaveImageAsync }/>
                    </View>
                </View>
            ) : (
                <View style={ styles.footerContainer }>
                    { <ButtonCustom onPress={ pickImageAsync } label="Choose a photo1" theme="primary"/> }
                    { <ButtonCustom onPress={ () => setShowAppOptions(true) } label="Use this photo1" theme=""/> }
                </View>
            ) }
            <EmojiPicker isVisible={ isModalVisible } onClose={ onModalClose }>
                <EmojiList onSelect={ setPickedEmoji } onCloseModal={ onModalClose }/>
            </EmojiPicker>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    imageContainer: {
        flexGrow: 1
    },
    optionsContainer: {
        flexShrink: 1
    },
    footerContainer: {
        flexShrink: 1,
        alignItems: 'center'
    },
    optionsRow: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    images: {
        flex: 1,
        width: '90%',
        alignSelf: 'center'
    }
});
