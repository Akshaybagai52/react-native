import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import logoImg from "./assets/adaptive-icon.png";

export default function App() {
  return (
    <View
      style={{
        display: "flex",

        height: "100%",
        backgroundColor: "plum",
        padding: 60,
      }}
    >
      <ScrollView>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1689249876759-10ff4bc9f189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
          }}
          style={{ height: 200, width: 200 }}
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit velit lacus,
          blandit pulvinar ad fermentum eros nostra ut libero integer, ridiculus
          per laoreet magnis enim himenaeos rhoncus feugiat. Ullamcorper
          eleifend faucibus ac purus molestie sem semper, etiam aptent rutrum
          curabitur aliquam felis, natoque habitasse cubilia vivamus bibendum
          convallis. Maecenas dictum pretium metus accumsan potenti velit
          elementum scelerisque, augue faucibus aenean tempus eu class tristique
          ad, feugiat commodo laoreet mollis proin molestie vel. Varius luctus
          duis nascetur eros dapibus et mollis potenti, a sociis iaculis
          interdum dignissim inceptos vestibulum nisi, integer sapien nostra
          nulla pharetra cubilia phasellus. Porttitor convallis sociis aliquam
          ad dignissim eget etiam interdum, euismod non sed aenean tortor libero
          pharetra. Penatibus proin magnis nibh blandit mi porttitor
          condimentum, cursus massa non congue vitae dui, sed elementum faucibus
          cubilia ultrices suspendisse magna, maecenas imperdiet facilisis cum
          taciti. Sollicitudin platea ligula gravida pretium porta, hac vehicula
          netus vivamus condimentum congue, conubia mollis pellentesque
          volutpat. Litora hendrerit eu consequat montes vivamus tristique
          tellus vel blandit, egestas nulla non id felis pellentesque placerat
          magna aliquet fringilla, sodales tempus gravida potenti feugiat porta
          vulputate ut. Sagittis erat consequat egestas cubilia conubia etiam
          placerat facilisi primis aenean, posuere diam inceptos nec fringilla
          sodales per molestie magnis bibendum sem, porttitor condimentum nam
          augue lobortis vel hac nostra phasellus. Congue maecenas mattis donec
          interdum massa iaculis dignissim tincidunt sociis, laoreet semper
          pellentesque convallis libero id cras tellus luctus, purus mauris nunc
          non morbi at velit in. Sem bibendum massa dis nisi nibh vulputate
          aenean gravida justo quisque volutpat nec nam porttitor, tempus
          commodo vitae scelerisque habitant rhoncus odio praesent a ultrices
          pulvinar dui dictum. Sed placerat cum morbi ultrices ullamcorper donec
          rhoncus, varius auctor enim nullam imperdiet nam hac, parturient
          fringilla senectus turpis fames pellentesque. Feugiat neque libero sem
          senectus vehicula mauris interdum purus magnis, nisl faucibus eleifend
          sollicitudin cum lacus dignissim. Interdum platea dis etiam curae
          donec non venenatis volutpat, eleifend senectus at ultrices fringilla
          pulvinar class orci convallis, est nibh cursus hac cras aliquam
          habitant. Blandit odio tincidunt erat nisl cursus convallis enim netus
          venenatis, metus pretium orci at montes ligula platea conubia lectus,
          dictum imperdiet diam laoreet aenean placerat gravida nisi. Imperdiet
          dapibus libero elementum venenatis condimentum viverra leo gravida
          mus, inceptos class et fusce pretium mi ultrices dui praesent dictum,
          magnis lacinia litora sollicitudin euismod suscipit eros accumsan.
          Vehicula arcu cursus penatibus fermentum placerat proin nisl magnis
          phasellus, scelerisque luctus lacinia tellus est nibh odio elementum
          porta, consequat eget sem dui mattis tortor nostra sagittis. Fusce
          dictumst ac nibh porttitor id tincidunt, morbi erat lectus cubilia
          taciti lobortis platea, suscipit condimentum rutrum in sapien. Cras
          tempus nisi nunc potenti arcu quam sed mus commodo, duis aliquet
          rutrum tellus dignissim urna montes turpis cursus nostra, primis
          hendrerit quis consequat orci posuere eu convallis. Dictum ligula
          purus ut morbi integer dignissim consequat lacus, duis at bibendum in
          mi commodo sodales fusce torquent, senectus phasellus sed ullamcorper
          volutpat quisque tincidunt. Urna molestie dictumst cum parturient
          mauris neque semper hac ullamcorper, mus taciti netus magna odio
          montes at. Lacus pellentesque dis tellus cum proin dignissim tempus
          tempor condimentum velit parturient, donec ac neque platea tincidunt
          class convallis integer cras nulla. Nec montes leo porta per morbi
          pharetra non tortor mollis, porttitor dis tempus ultrices fringilla
          dignissim erat molestie aptent consequat, mi viverra diam eleifend
          feugiat nisl venenatis donec. Nisl purus blandit arcu fringilla ac
          enim, venenatis senectus integer suspendisse dictum dictumst nullam,
          ante dui eget donec a. Pretium primis quam suscipit cras lobortis
          auctor varius, quisque aliquet litora praesent tempus gravida,
          maecenas euismod sagittis eros semper libero. Mollis tempus dignissim
          commodo venenatis inceptos interdum erat felis integer mus,
          sollicitudin aptent hac condimentum morbi nec etiam nunc fringilla
          accumsan cubilia, donec purus viverra pellentesque mauris hendrerit
          ligula iaculis justo. Litora tortor non tempus nibh pharetra morbi
          nullam at iaculis parturient pretium, nascetur dui dis urna netus
          volutpat facilisi malesuada nunc mi, condimentum aliquet ad nostra
          mauris tempor blandit taciti class sociosqu. Placerat velit sapien
          consequat posuere nullam vehicula mus nibh sagittis, dapibus venenatis
          sociosqu ultrices primis accumsan nisi dui sollicitudin, eros porta
          vulputate nec tempus habitant cum bibendum.
        </Text>

        {/* <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1689326232616-aea5c86f86bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
        style={{ flex: 1, zIndex: 5}}
      >
      
      <Image source={logoImg} style={{ height: 200, width: 200 }} />

      </ImageBackground> */}
        {/* <View
        style={{ height: 200, width: 159, backgroundColor: "lightgreen" }}
      >
        <Text>Green box</Text>
      </View>
      <View
        style={{ height: 200, width: 159, backgroundColor: "lightblue" }}
      >
        <Text>Blue box</Text>
      </View> */}
      </ScrollView>
    </View>
  );
}
