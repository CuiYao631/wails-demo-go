package main

import (
	"context"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// EventsOnStart 添加事件侦听器
func (a *App) EventsOnStart(eventName string) {
	runtime.EventsOn(a.ctx, eventName, func(optionalData ...interface{}) {

	})
}

// EventsOff 移除事件侦听器
func (a *App) EventsOff(eventName string) {
	runtime.EventsOff(a.ctx, eventName)
}

// EventsOnce 添加只触发一次的事件侦听器
func (a *App) EventsOnce(eventName string) {
	runtime.EventsOnce(a.ctx, eventName, func(optionalData ...interface{}) {

	})
}

// EventsOnMultiple 添加指定对多触发次数的事件侦听器
func (a *App) EventsOnMultiple(eventName string, times int) {
	runtime.EventsOnMultiple(a.ctx, eventName, func(optionalData ...interface{}) {

	}, 0)
}

// EventsEmit 触发指定事件
func (a *App) EventsEmit(eventName string, optionalData ...interface{}) {
	runtime.EventsEmit(a.ctx, eventName, optionalData...)
}
