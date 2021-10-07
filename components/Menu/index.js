import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import items from '../../constants/items';

export default function Menu() {
    return (
        <View style={styles.menuItems}>
            {
                items.map((item, _) =>
                    <TouchableOpacity key={_}>
                        <View style={styles.menuRow}>
                            <FontAwesomeIcon icon={item.icon} size={24} color={'white'} />
                            <View style={styles.menuTextBox}>
                                <Text style={styles.menuRowTitle}>{item.title}</Text>
                                {
                                    item.subTitle &&
                                    (<Text style={styles.menuRowSubtitle}>{item.subTitle}</Text>)
                                }
                            </View>
                            <FontAwesomeIcon icon={faChevronRight} size={24} color={'#4D4D4E'} />
                        </View>
                    </TouchableOpacity>)
            }
        </View>
    );
}
