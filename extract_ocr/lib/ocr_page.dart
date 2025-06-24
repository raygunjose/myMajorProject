import 'dart:io';
import 'package:flutter/material.dart';
import 'package:google_mlkit_text_recognition/google_mlkit_text_recognition.dart';
import 'package:image_picker/image_picker.dart';

class OcrPage extends StatefulWidget {
  const OcrPage({super.key});

  @override
  State<OcrPage> createState() => _OcrPageState();
}

class _OcrPageState extends State<OcrPage> {
  String scannedText = '';
  File? imageFile;

  Future<void> pickGalaryImage() async{
    final pickedFile = await ImagePicker().pickImage(source: ImageSource.gallery);
    if(pickedFile != null){

      setState(() {
        imageFile = File(pickedFile.path);
      });
      await processImage(pickedFile.path);
    }
  }

  Future<void> pickCameraImage() async{
    final pickedFile = await ImagePicker().pickImage(source: ImageSource.camera);
    if(pickedFile != null){

      setState(() {
        imageFile = File(pickedFile.path);
      });
      await processImage(pickedFile.path);
    }
  }

  processImage(String imagePath) async {
    final inputImage = InputImage.fromFilePath(imagePath);
    final textRecognizer = TextRecognizer(script: TextRecognitionScript.latin);

    final RecognizedText recognizedText =  await textRecognizer.processImage(inputImage);
    setState(() {
      scannedText = recognizedText.text;
    });

    textRecognizer.close();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("OCR with Flutter")
      ),
      body: Column(
          children: [
            ElevatedButton.icon(
              onPressed: pickGalaryImage,
              icon: Icon(Icons.image),
              label: Text('Pick Image from Gallery'),
            ),
            ElevatedButton.icon(
              onPressed: pickCameraImage,
              icon: Icon(Icons.image),
              label: Text('Open Camera'),
            ),
            SizedBox(
              height: 10,
            ),
            if(imageFile != null)
              Image.file(imageFile!, height: 200),
              SizedBox(height: 20),
              Text('Recognized Text:', style:TextStyle(
                fontWeight: FontWeight.bold
              )),
              Expanded(
                child: SingleChildScrollView(
                  child: Text(scannedText, style: const TextStyle(fontSize: 16))
                ),
              )
          ],
        ),
    );
  }
}