import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Back from '../../assets/back.svg'
import Share from '../../assets/share.svg'
import Search from '../../assets/search.svg'
import { useEffect } from 'react';


const windowsWidth = Dimensions.get('window').width;

export default function Header({ customLeft, customMiddle, customRight }) {

    return (
        <View style={styles.headerView}>
            <View style={styles.left}>
                {customLeft ? (customLeft()) :
                    (<TouchableOpacity>
                        <Back fill="white" width={30} height={30} />
                    </TouchableOpacity>)
                }
            </View>
            <View style={styles.middle}>
                {customMiddle ? (customLeft()) : null}
            </View>
            <View style={styles.right}>
                {customRight ? (customRight()) :
                    (<View style={styles.right}>
                        <TouchableOpacity>
                            <Share fill="white" width={45} height={45} />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Search fill="white" width={50} height={43}/>
                        </TouchableOpacity>
                    </View>)
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerView: {
        width: windowsWidth,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        gap: 18,
    }
})