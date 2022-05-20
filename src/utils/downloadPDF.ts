import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export const downloadPDF = async (pdf: any, name: string) => {
  try {
    const fileDirectory = FileSystem.documentDirectory;
    const fileName = `${name}.pdf`;
    const path = `${fileDirectory}/${fileName}`;

    await FileSystem.writeAsStringAsync(path, pdf, {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Sharing.shareAsync(path, {
      mimeType: "application/pdf",
      dialogTitle: "Compartilhar PDF",
    });

    await FileSystem.deleteAsync(path);
  } catch {
    return;
  }
};
