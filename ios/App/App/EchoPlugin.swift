//
//  EchoPlugin.swift
//  App
//
//  Created by Sanjay Seshan on 8/17/21.
//

import Foundation

import Capacitor

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve([
        "value": value
    ])
  }
}
