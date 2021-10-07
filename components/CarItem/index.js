import React, { useState } from 'react';
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faToolbox, faFan, faKey, faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Menu/index';

export default function CarItem() {

    const [locked, setLocked] = useState(true);

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={require('../../assets/background.png')}
                resizeMode={'cover'}
                style={styles.backgroundImage}
            />
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faCog} size={24} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Lexus EV</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faToolbox} size={24} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.batterySection}>
                <Image
                    source={require('../../assets/battery.png')}
                    resizeMode={'cover'}
                    style={styles.batteryImage}
                />
                <Text style={styles.batteryText}>600 KM</Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    Parked
                </Text>
            </View>
            <ScrollView>
                <View style={styles.controls}>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon
                                icon={faFan}
                                size={24}
                                color={'white'}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon
                                icon={faKey}
                                size={24}
                                color={'white'}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLocked(!locked)}>
                        <View style={styles.controlsButton}>
                            <FontAwesomeIcon
                                icon={locked ? faLock : faUnlock}
                                size={24}
                                color={'white'}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <Menu />
            </ScrollView>
        </View>
    );
}
