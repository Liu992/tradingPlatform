import React, { Component } from 'react';
import './WebsocketApi.scss';

class WebsocketApi extends Component {
  render() {
    return (
        <div className="content">
          <div className="content-top">
            <h1>貔貅WebSocket数据接口 (WebSocket API)</h1>
            <small>接口URI: wss://peatio.com:8080</small><br/>
            <small>返回结果格式: JSON</small>
            <br/>
            <br/>
          </div>
          <div className="content-item">
            <h1>WebSocket API</h1>
            <p>貔貅WebSocket API为开发者提供一个实时性更强的数据通道。貔貅服务器能够将orderbook的变化以及市场成交数据通过websocket长连接实时的推送(push)给WebSocket API的用户。</p>
            <p>使用WebSocket API可以分为简单的三步:</p>
            <ol>
              <li>1. 建立websocket连接</li>
              <li>2. 使用api token验证身份</li>
              <li>3. 接收并处理数据</li>
            </ol>
          </div>

          <div className="content-item">
            <h1>建立websocket连接</h1>
            <p>WebSocket是应用广泛的标准，各种语言都有自己的支持库。以Javascript为例:</p>
            <p>Javascript:</p>
            <div className="code">
              <pre><code class="undefined">
                {`var host = 'wss://peatio.com:8080';
                var socket = new WebSocket(host);
                socket.onopen = function() {
                  console.log("opened");
                }

                socket.onmessage = function(msg) {
                  console.log(msg);
                }

                socket.onclose = function() {
                  console.log("closed");
                }`}
                </code></pre>
            </div>
            <p>还可以参考貔貅官方Ruby客户端的实现:&nbsp;<a href="https://github.com/peatio/peatio-client-ruby/blob/master/lib/peatio_api/streaming_client.rb">https://github.com/peatio/peatio-client-ruby/blob/master/lib/peatio_api/streaming_client.rb</a></p>
          </div>

          <div className="content-item">
            <h1>使用api token验证身份</h1>
            <p>在验证身份之前, 你必须准备好你的access/secret key. 在注册并认证通过后之后，只需访问<a href="/api_tokens">API密钥</a>页面就可以得到您的密钥。</p>
            <p>当你通过上一步与貔貅服务器建立WebSocket连接之后，貔貅服务器会返回一条格式如下的challenge消息:</p>
            <div className="code">
              <pre>
                <code className="json">
                  {`{`}
                  <span>"challenge":</span>
                  <span className="string">"d45sSFIZZdYzRgwi-zDqA8HFP2MfVoWqXlHX-2LbB_37q9_3pkZ8og"</span>
                  {`}`}
                </code>
              </pre>
            </div>
            
            <p>challenge包含一条随机生成的字符串, 客户端需要用access/secret key对这个字符串签名，然后将签名发回服务器，服务器对签名进行验证，正确则继续下一步，否则返回错误消息。</p>
            <p>签名的生成很简单，首先把你的access key与challenge字符串连接:</p>
            <div className="code">
              <pre>
                <code className="json">
                payload = access_key + challenge
                </code>
              </pre>
            </div>
            
            <p>假设access key为"abc", challenge为"def", 则payload为"abcdef". 接下来用HMAC-SHA256和secret key计算payload的签名:</p>
            <div className="code">
              <pre><code className="undefined">signature = HMAC-SHA256(secret_key, payload).to_hex</code></pre>
            </div>
            
            <p>假设secret_key为'ghi', 用HMAC-SHA256对上例中的payload签名结果为:</p>
            <div className="code">
              <pre><code className="undefined">signature = HMAC-SHA256('ghi', 'abcdef').to_hex
              = '52ca0e5beab532532c62155e78d81c7dc8ad6d6f744cf3797668cf52dd2f9a41'</code></pre>
            </div>
            
            <p>现在我们只需将得到的签名以如下格式传回服务器:</p>
            <div className="code">
              <pre><code className="undefined">{`{auth: {access_key: 'your_access_key', answer: 'the_signature'}}`}</code></pre>
            </div>
            
            <p>更多信息可以参考貔貅官方Ruby客户端的实现:&nbsp;<a href="https://github.com/peatio/peatio-client-ruby/blob/master/lib/peatio_api/streaming_client.rb">https://github.com/peatio/peatio-client-ruby/blob/master/lib/peatio_api/streaming_client.rb</a></p>
          </div>

          <div className="content-item">
            <h1>接受数据</h1>
            <p>验证通过后就可以接受服务器发送的实时数据了. 目前貔貅通过WebSocket API提供两类实时数据: Trade和Orderbook. 详细数据格式如下:</p>
      
            <table className="result">
              <thead>
                <tr>
                  <th>数据类型</th>
                  <th>数据结构/示例</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trade</td>
                  <td>
                    <pre>
                      <code className="json">
                       {`{ "trade"=>
  { "id"=>2435,
    "price"=>"3500.0",
    "volume"=>"0.0331",
    "funds"=>"115.85",
    "market"=>"btccny",
    "created_at"=>"2014-06-16T05:02:37Z",
    "side"=>"bid",
    "bid"=>{
      "id"=>3248, "side"=>"buy", "price"=>nil,
      "avg_price"=>"3500.0", "state"=>"done", "market"=>"btccny",
      "created_at"=>"2014-06-16T05:02:37Z", "volume"=>"0.0331",
      "remaining_volume"=>"0.0", "executed_volume"=>"0.0331"
    }
  }
}`}
                      </code>
                    </pre>
                  </td>
                  <td>
                    <p>Trade消息代表你的挂单有了新的成交.</p>
                    <p>price/volume: 成交价/成交数量</p>
                    <p>funds: 成交额(以报价货币为单位)</p>
                    <p>market: 基准货币/报价货币对</p>
                    <p>side: 你在这笔成交中的角色(ask: 卖方, bid: 买方)</p>
                    <p>ask或者bid: 成交后的挂单数据</p>
                  </td>
                </tr>
                <tr>
                  <td>Market</td>
                  <td>
                    <pre>
                      <code className="json">
                        {`{ "orderbook"=>
  { "action"=>"add",
    "order"=>{
      "id"=>3252,
      "timestamp"=>1402898864,
      "type"=>"ask",
      "volume"=>"1.0",
      "price"=>"3500.0",
      "market"=>"btccny",
      "ord_type"=>"limit"}
  }
}`}
                      </code>
                    </pre>
                  </td>
                  <td style={{width: "350px"}}>
                    <p>Orderbook消息代表orderbook有了变化.</p>
                    <p>Orderbook add消息("action"=&gt;"add")表示有新的order加入orderbook.</p>
                    <p>Orderbook remove消息("action"=&gt;"remove")表示orderbook移除了这个order (原因可能是用户取消挂单或者挂单完全成交).</p>
                    <p>Orderbook update消息("action"=&gt;"update")表示orderbook中的order被更新了.</p>
                    <p>action: orderbook操作, 取值范围: add, remove, update</p>
                    <p>order: 被操作的order</p>
                    </td>
                </tr>
                
              </tbody>
            </table>
          </div>

          

          <div className="content-item">
            <h1>相关库/工具列表</h1>
            <ul>
              <li>
                <h4>
                  <a href="http://github.com/peatio/peatio-client-ruby">peatio-client-ruby (ruby)</a>
                </h4>
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default WebsocketApi