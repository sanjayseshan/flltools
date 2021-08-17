package com.ev3lessons.flltools;

import android.app.DownloadManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Environment;
import android.os.Handler;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.MimeTypeMap;
import android.widget.Toast;

import androidx.appcompat.app.AlertDialog;
import androidx.core.app.NotificationCompat;
import androidx.core.content.FileProvider;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;
import java.util.Scanner;

import static android.content.Context.DOWNLOAD_SERVICE;

public class JavaScriptInterface {
  Context mContext;
  JSONObject dict;

  JavaScriptInterface(Context c) {
    mContext = c;

    try {
      InputStream myObj = mContext.getAssets().open("public/assets/translations/en.json");

      Scanner myReader = new Scanner(myObj);
      String buf = "";
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        buf+=data+"\n";
      }
      System.out.println(buf);
      myReader.close();
      dict = new JSONObject(buf);
    } catch (JSONException | IOException e) {
      e.printStackTrace();
    }
  }

  @JavascriptInterface
  public String sendData(String data, String filename) throws JSONException {
    File dir = new File("//sdcard//Download//");
    File file1 = new File(dir, filename);

    if (file1.exists()) {
      DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss");
      Date date = new Date();
      filename = dateFormat.format(date) + "_" + filename;
    }
    File file = new File(dir, filename);
    String msg;
    try {
      FileWriter myWriter = new FileWriter("//sdcard//Download//"+filename);
      myWriter.write(data);
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
      msg = "Saved file to Downloads";

//      AlertDialog.Builder builder1 = new AlertDialog.Builder(mContext);
//      builder1.setMessage(getTranslation("Saved file to Downloads"));
//      builder1.setCancelable(true);
//
//      builder1.setNegativeButton(
//        "Okay",
//        new DialogInterface.OnClickListener() {
//          public void onClick(DialogInterface dialog, int id) {
//            dialog.cancel();
//          }
//        });
//
//      AlertDialog alert11 = builder1.create();
//      alert11.show();

    } catch (IOException e) {
      msg = "Failed to save file to Downloads";

//      AlertDialog.Builder builder1 = new AlertDialog.Builder(mContext);
//      builder1.setMessage(getTranslation("Failed to save file to Downloads"));
//      builder1.setCancelable(true);
//
//      builder1.setNegativeButton(
//        "Okay",
//        new DialogInterface.OnClickListener() {
//          public void onClick(DialogInterface dialog, int id) {
//            dialog.cancel();
//          }
//        });
//
//      AlertDialog alert11 = builder1.create();
//      alert11.show();
//            System.out.println("An error occurred.");
      e.printStackTrace();
    }

    DownloadManager downloadManager = (DownloadManager) mContext.getSystemService(DOWNLOAD_SERVICE);

    downloadManager.addCompletedDownload(file.getName(), file.getName(), true, "text/plain",file.getAbsolutePath(),file.length(),true);
    return msg;
  }

  @JavascriptInterface
  public String sendImgData(String data, String filename) {
    File dir = new File("//sdcard//Download//");
    File file1 = new File(dir, filename);

    if (file1.exists()) {
      DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd_HH-mm-ss");
      Date date = new Date();
      filename = dateFormat.format(date) + "_" + filename;
    }
    File file = new File(dir, filename);
    String msg;
    try {
      System.out.println(data);
      byte[] decodedImg = Base64.getDecoder().decode(data.getBytes(StandardCharsets.UTF_8));
      Path destinationFile = Paths.get("//sdcard//Download//", filename);
      Files.write(destinationFile, decodedImg);
//
//            FileWriter myWriter = new FileWriter("//sdcard//Download//"+filename);
//            myWriter.write(data);
//            myWriter.close();
      System.out.println("Successfully wrote to the file.");
      msg = "Saved file to Downloads";
//      AlertDialog.Builder builder1 = new AlertDialog.Builder(mContext);
//      builder1.setMessage(getTranslation("Saved file to Downloads"));
//      builder1.setCancelable(true);
//
//      builder1.setNegativeButton(
//        "Okay",
//        new DialogInterface.OnClickListener() {
//          public void onClick(DialogInterface dialog, int id) {
//            dialog.cancel();
//          }
//        });
//
//      AlertDialog alert11 = builder1.create();
//      alert11.show();

    } catch (IOException e) {
    msg = "Failed to save file to Downloads";
//      AlertDialog.Builder builder1 = new AlertDialog.Builder(mContext);
//      builder1.setMessage(getTranslation("Failed to save file to Downloads"));
//      builder1.setCancelable(true);
//
//      builder1.setNegativeButton(
//        "Okay",
//        new DialogInterface.OnClickListener() {
//          public void onClick(DialogInterface dialog, int id) {
//            dialog.cancel();
//          }
//        });
//
//      AlertDialog alert11 = builder1.create();
//      alert11.show();
////            System.out.println("An error occurred.");
      e.printStackTrace();
    }

    DownloadManager downloadManager = (DownloadManager) mContext.getSystemService(DOWNLOAD_SERVICE);

    downloadManager.addCompletedDownload(file.getName(), file.getName(), true, "text/plain",file.getAbsolutePath(),file.length(),true);
  return msg;
  }

  @JavascriptInterface
  public String readFile(String filename) {
    try {
      InputStream myObj = mContext.getAssets().open(filename);

      Scanner myReader = new Scanner(myObj);
      String buf = "";
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        buf+=data+"\n";
      }
      System.out.println(buf);
      myReader.close();
      dict = new JSONObject(buf);
      return buf;
    } catch (Exception e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
      return "";
    }
  }

  public String getTranslation(String text) {
    return text;
//    try {
//      return dict.getString(text);
//    } catch (JSONException e) {
//      return text;
//    }
  }
}
