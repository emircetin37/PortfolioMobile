import { Image, Text, View } from "react-native";
import UserDto from "../../../dtos/UserDto"
import { Presentation } from "lucide-react-native";
const projects = require('../../../assets/images/projects.jpg')
import styles from './Projects.style';

const Projects: React.FC<{ user?: UserDto }> = ({ user }) => {
    return (
        <>
            {user?.projects && user.projects.length > 0 && (
                <View style={styles.container}>
                    <Image style={styles.image} source={projects} />
                    <Text style={styles.title}>Projeler</Text>
                </View>
            )}
            {user?.projects.map(({ projectName, projectDetails }) => (
                <View key={projectName} style={styles.projectContainer}>
                    <Presentation color={"#4873FE"} size={20}></Presentation>
                    <View style={styles.textContainer}>
                        <Text style={styles.grayText}>{projectName}</Text>
                        <View style={styles.projectDetailsContainer}>
                            {projectDetails.map((detail, index) => (
                                <Text key={index}>{detail.detail}</Text>
                            ))}
                        </View>
                    </View>
                </View>
            ))}
        </>
    );
};

export default Projects;
