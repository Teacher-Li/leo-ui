<template>
    <div class="form-page">

        <Header></Header>

        <div class="body">
            <div class="wrapper">

                <Sider></Sider>

                <div class="content">
                    <h1>Form 表单</h1>
                    <div class="anchor">
                        <h2>代码示例</h2>
                    </div>
                    <div class="card">
                        <div class="demo">
                            <div class="leo-form">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">学生姓名：</label>
                                    <input type="text" class="leo-form-value leo-form-input">
                                </div>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">学生学号：</label>
                                    <span class="leo-form-value leo-form-span bg">010</span>
                                </div>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">学生昵称：</label>
                                    <span class="leo-form-value leo-form-span">果冻</span>
                                </div>
                                <div class="leo-form-item leo-form-btn">
                                    <div class="leo-btn" color="primary" bg shadow>确定</div>
                                </div>
                            </div>
                            <div class="title"><span>基本用法</span></div>
                            <div class="description">
                                表单的最简单用法 <br>
                                <code>label</code> 默认宽度为100，默认对齐方式为右对齐
                            </div>
                        </div>
                        <div class="code">
                            <textarea type="text" :value="code1" id="code1"></textarea>
                            <a @click="copy($event, 'code1')">Copy</a>
                            <pre>                    {{ code1 }}</pre>
                        </div>
                    </div>
                    <div class="card">
                        <div class="demo">
                            <div class="leo-form" label-width="120">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">宽度：</label>
                                    <input type="text" class="leo-form-value leo-form-input" value="120">
                                </div>
                            </div>
                            <div class="leo-form" label-width="110">
                                <div class="leo-form-item">
                                    <label class="leo-form-label" required>局部：</label>
                                    <input type="text" class="leo-form-value leo-form-input" value="110">
                                </div>
                            </div>
                            <div class="leo-form" required>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">全局：</label>
                                    <input type="text" class="leo-form-value leo-form-input" value="100">
                                </div>
                            </div>
                            <div class="leo-form" label-width="90">
                                <div class="leo-form-item">
                                    <label class="leo-form-label" required>局部：</label>
                                    <input type="text" class="leo-form-value leo-form-input" value="90">
                                </div>
                            </div>
                            <div class="leo-form" label-width="80">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">宽度：</label>
                                    <input type="text" class="leo-form-value leo-form-input" value="80">
                                </div>
                            </div>
                            <div class="title"><span>表单控件</span></div>
                            <div class="description">
                                <code>label</code> 宽度值有：80、90、100、110、120。 <br>
                                添加属性 <code>required</code>， 可设置全局必填性和局部必填项。<br>
                                通过设置 <code>label-width</code> 的值来设置 <code>label</code> 宽度大小，不设置为默认宽度。
                            </div>
                        </div>
                        <div class="code">
                            <textarea type="text" :value="code2" id="code2"></textarea>
                            <a @click="copy($event, 'code2')">Copy</a>
                            <pre>                    {{ code2 }}</pre>
                        </div>
                    </div>
                    <div class="card">
                        <div class="demo">
                            <div class="leo-form" label-width="80" inline>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">账户：</label>
                                    <input type="text" class="leo-form-value leo-form-input">
                                </div>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">密码：</label>
                                    <input type="password" class="leo-form-value leo-form-input">
                                </div>
                                <div class="leo-form-item leo-form-btn">
                                    <div class="leo-btn" color="primary" bg shadow>确定</div>
                                </div>
                            </div>
                            <div class="title"><span>行内表单</span></div>
                            <div class="description">添加属性 <code>inline</code>，表单元素可以水平排列。</div>
                        </div>
                        <div class="code">
                            <textarea type="text" :value="code3" id="code3"></textarea>
                            <a @click="copy($event, 'code3')">Copy</a>
                            <pre>                    {{ code3 }}</pre>
                        </div>
                    </div>
                    <div class="card">
                        <div class="demo">
                            <div class="leo-form" label-position="left">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">用户账户：</label>
                                    <input type="text" class="leo-form-value leo-form-input">
                                </div>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">用户密码：</label>
                                    <input type="password" class="leo-form-value leo-form-input">
                                </div>
                            </div>
                            <div class="leo-form" label-position="top">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">用户账户：</label>
                                    <input type="text" class="leo-form-value leo-form-input">
                                </div>
                                <div class="leo-form-item">
                                    <label class="leo-form-label">用户密码：</label>
                                    <input type="password" class="leo-form-value leo-form-input">
                                </div>
                            </div>
                            <div class="leo-form" label-position="right-top">
                                <div class="leo-form-item">
                                    <label class="leo-form-label">用户简介：</label>
                                    <textarea class="leo-form-value leo-form-input" style="padding: 8px; height: 64px;"></textarea>
                                </div>
                            </div>
                            <div class="title"><span>对齐方式</span></div>
                            <div class="description">
                                <code>label</code> 对齐方式有：左对齐、右对齐、上对齐、置于顶部。 <br>
                                通过设置 <code>label-position</code> 的值来设置 <code>label</code> 对齐方式，不设置为默认对齐方式。
                            </div>
                        </div>
                        <div class="code">
                            <textarea type="text" :value="code4" id="code4"></textarea>
                            <a @click="copy($event, 'code4')">Copy</a>
                            <pre>                    {{ code4 }}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sider from '../components/Sider';
    import Header from '../components/Header';

    export default {
        name: 'Form',
        components: {
            Sider,
            Header,
        },
        data() {
            return {
                code1: `<div class="leo-form">
                            <div class="leo-form-item">
                                <label class="leo-form-label">学生姓名：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">学生学号：</label>
                                <span class="leo-form-value leo-form-span bg">010</span>
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">学生昵称：</label>
                                <span class="leo-form-value leo-form-span">果冻</span>
                            </div>
                            <div class="leo-form-item leo-form-btn">
                                <div class="leo-btn" color="primary" bg shadow>确定</div>
                            </div>
                        </div>`,

                code2: `<div class="leo-form" label-width="120">
                            <div class="leo-form-item">
                                <label class="leo-form-label">宽度：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="120">
                            </div>
                        </div>
                        <div class="leo-form" label-width="110">
                            <div class="leo-form-item">
                                <label class="leo-form-label" required>局部：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="110">
                            </div>
                        </div>
                        <div class="leo-form" required>
                            <div class="leo-form-item">
                                <label class="leo-form-label">全局：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="100">
                            </div>
                        </div>
                        <div class="leo-form" label-width="90">
                            <div class="leo-form-item">
                                <label class="leo-form-label" required>局部：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="90">
                            </div>
                        </div>
                        <div class="leo-form" label-width="80">
                            <div class="leo-form-item">
                                <label class="leo-form-label">宽度：</label>
                                <input type="text" class="leo-form-value leo-form-input" value="80">
                            </div>
                        </div>`,

                code3: `<div class="leo-form" label-width="80" inline>
                            <div class="leo-form-item">
                                <label class="leo-form-label">账户：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">密码：</label>
                                <input type="password" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item leo-form-btn">
                                <div class="leo-btn" color="primary" bg shadow>确定</div>
                            </div>
                        </div>`,

                code4: `<div class="leo-form" label-position="left">
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户账户：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户密码：</label>
                                <input type="password" class="leo-form-value leo-form-input">
                            </div>
                        </div>
                        <div class="leo-form" label-position="top">
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户账户：</label>
                                <input type="text" class="leo-form-value leo-form-input">
                            </div>
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户密码：</label>
                                <input type="password" class="leo-form-value leo-form-input">
                            </div>
                        </div>
                        <div class="leo-form" label-position="right-top">
                            <div class="leo-form-item">
                                <label class="leo-form-label">用户简介：</label>
                                <textarea class="leo-form-value leo-form-input" style="padding: 8px; height: 64px;"></textarea>
                            </div>
                        </div>`
            }
        },
        methods: {
            copy(e, id) {
                let tag = e.target;
                if (!tag.className) {
                    document.querySelector('#' + id).select();
                    document.execCommand("Copy");

                    tag.innerHTML = 'Copied';
                    tag.className = 'success';
                    setTimeout(() => {
                        tag.className = '';
                        tag.innerHTML = 'Copy';
                    }, 5000)
                }
            }
        }
    }
</script>