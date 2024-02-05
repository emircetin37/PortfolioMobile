import React from 'react';
import { Image, Text, View } from 'react-native';
import User from '../../../dtos/UserDto';
import { Lightbulb, Star } from 'lucide-react-native';
const competenceImage = require('../../../assets/images/competence.jpg');
import styles from './Competencies.style';

const Competencies: React.FC<{ user?: User }> = ({ user }) => {
    return (
        <>
            {user?.competences && user.competences.length > 0 && (
                <View style={styles.container}>
                    <Image style={styles.image} source={competenceImage} />
                    <Text style={styles.title}>Yetkinlikler</Text>
                </View>
            )}
            {user?.competences?.map(({ proficiency, skill }) => (
                <View key={skill} style={styles.competenceContainer}>
                    <Lightbulb color="#4873FE" size={20} />
                    <View style={styles.textContainer}>
                        <Text style={styles.skillText}>{skill}</Text>
                        <View style={styles.starsContainer}>
                            {Array.from({ length: Number(proficiency) }, (_, index) => (
                                <Star key={index} />
                            ))}
                        </View>
                    </View>
                </View>
            ))}
        </>
    );
};

export default Competencies;
